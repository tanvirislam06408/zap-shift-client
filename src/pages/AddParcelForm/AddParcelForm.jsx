import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";



const generateTrackingId = (district = "GEN") => {
  const prefix = "PCL";

  // district short code (first 3 letters uppercase)
  const districtCode = district.slice(0, 3).toUpperCase();

  // date YYYYMMDD
  const date = new Date()
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "");

  // random 5 char string
  const random = Math.random().toString(36).substring(2, 7).toUpperCase();

  return `${prefix}-${districtCode}-${date}-${random}`;
};


export default function AddParcelForm() {

  const axiosSecure = useAxiosSecure();


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();


  const onSubmit = (data) => {
    const createdAt = new Date(); // ✅ FIX

    const trackingId = generateTrackingId(data.senderDistrict)
    const parcelData = {
      ...data,

      // 📅 Time info
      createdAt, // full date object
      createdDate: createdAt.toLocaleDateString(),
      createdTime: createdAt.toLocaleTimeString(),

      // 👤 User info
      createdBy: {
        payment_status: 'unpaid',
        delivery_status: 'not-collected',
        email: user?.email,
        trackingId
      },
    };

    axiosSecure.post('/parcel',parcelData)
    .then(res=>{
      console.log(res.data);
      
    })

    Swal.fire({
      title: "Delivery Charge",
      html: `
      <p class="text-lg font-semibold">Estimated Cost: 50 TK</p>
      <p class="text-sm text-gray-500">Click confirm to calculate final cost</p>
    `,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Confirm Booking",
    }).then((result) => {
      if (result.isConfirmed) {
        const isDhaka =
          data.senderDistrict === "Dhaka" &&
          data.receiverDistrict === "Dhaka";

        let cost = isDhaka ? 100 : 150;

        const weight = parseFloat(data.parcelWeight) || 0;

        if (weight > 1) {
          cost += (weight - 1) * 30;
        }

        parcelData.cost = cost;

        // 👉 FINAL DATA (you can send anywhere later)
        console.log("📦 FINAL PARCEL:", parcelData);

        Swal.fire({
          title: "Booking Confirmed 🎉",
          html: `<p>Total Cost: <b>${cost} TK</b></p>`,
          icon: "success",
        });
      }
    });
  };

  const locationData = {
    Dhaka: ["Dhamrai", "Dohar", "Keraniganj", "Nawabganj", "Savar"],
    Chattogram: ["Anwara", "Boalkhali", "Hathazari", "Patiya", "Sitakunda"],
    Rajshahi: ["Bagha", "Bagmara", "Charghat", "Durgapur", "Puthia"],
    Khulna: ["Batiaghata", "Dacope", "Dighalia", "Dumuria", "Paikgachha"],
    Sylhet: ["Balaganj", "Beanibazar", "Bishwanath", "Companiganj", "Fenchuganj"],
    Barishal: ["Agailjhara", "Babuganj", "Banaripara", "Bakerganj", "Wazirpur"],
  };

  const districts = Object.keys(locationData);

  const senderDistrict = watch("senderDistrict");
  const receiverDistrict = watch("receiverDistrict");











  return (
    <div className="bg-base-200 min-h-screen flex justify-center p-6">
      <div className="bg-base-100 w-full max-w-6xl p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-6">Add Parcel</h1>
        <hr className="mb-6" />

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Parcel Info */}
          {/* Parcel Type */}
          <h2 className="font-semibold mb-3">Enter your parcel details</h2>

          <div className="flex gap-6 mb-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="document"
                {...register("parcelType")}
                defaultChecked
                className="radio radio-success"
              />
              Document
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="non-document"
                {...register("parcelType")}
                className="radio"
              />
              Non-Document
            </label>
          </div>

          {/* Parcel Info */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {/* Parcel Name */}
            <input
              type="text"
              placeholder="Parcel Name"
              className="input input-bordered w-full"
              {...register("parcelName", { required: "Parcel name is required" })}
            />

            {/* Weight */}
            <input
              type="number"
              placeholder="Parcel Weight (KG)"
              className="input input-bordered w-full"
              {...register("parcelWeight", {
                validate: (value) => {
                  if (watch("parcelType") === "non-document" && !value) {
                    return "Weight is required for non-document";
                  }
                  return true;
                },
              })}
              disabled={watch("parcelType") === "document"}
            />
          </div>

          {/* Errors */}
          {errors.parcelName && (
            <p className="text-red-500 text-sm mb-2">
              {errors.parcelName.message}
            </p>
          )}

          {errors.parcelWeight && (
            <p className="text-red-500 text-sm mb-4">
              {errors.parcelWeight.message}
            </p>
          )}

          {/* Sender & Receiver */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Sender */}
            <div>
              <h3 className="font-semibold mb-4">Sender Details</h3>

              <div className="grid grid-cols-2 gap-4">
                <input
                  placeholder="Sender Name"
                  className="input input-bordered"
                  {...register("senderName")}
                />

                <input
                  placeholder="Sender Contact"
                  className="input input-bordered"
                  {...register("senderContact")}
                />

                <input
                  placeholder="Address"
                  className="input input-bordered col-span-2"
                  {...register("senderAddress")}
                />

                {/* District */}
                <select
                  className="select select-bordered"
                  {...register("senderDistrict")}
                >
                  <option value="">District</option>
                  {districts.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>

                {/* Upazila */}
                <select
                  className="select select-bordered"
                  {...register("senderUpazila")}
                  disabled={!senderDistrict}
                >
                  <option value="">Upazila</option>
                  {senderDistrict &&
                    locationData[senderDistrict].map((u) => (
                      <option key={u}>{u}</option>
                    ))}
                </select>

                <textarea
                  placeholder="Pickup Instruction"
                  className="textarea textarea-bordered col-span-2"
                  {...register("pickupInstruction")}
                />
              </div>
            </div>

            {/* Receiver */}
            <div>
              <h3 className="font-semibold mb-4">Receiver Details</h3>

              <div className="grid grid-cols-2 gap-4">
                <input
                  placeholder="Receiver Name"
                  className="input input-bordered"
                  {...register("receiverName")}
                />

                <input
                  placeholder="Receiver Contact"
                  className="input input-bordered"
                  {...register("receiverContact")}
                />

                <input
                  placeholder="Address"
                  className="input input-bordered col-span-2"
                  {...register("receiverAddress")}
                />

                {/* District */}
                <select
                  className="select select-bordered"
                  {...register("receiverDistrict")}
                >
                  <option value="">District</option>
                  {districts.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>

                {/* Upazila */}
                <select
                  className="select select-bordered"
                  {...register("receiverUpazila")}
                  disabled={!receiverDistrict}
                >
                  <option value="">Upazila</option>
                  {receiverDistrict &&
                    locationData[receiverDistrict].map((u) => (
                      <option key={u}>{u}</option>
                    ))}
                </select>

                <textarea
                  placeholder="Delivery Instruction"
                  className="textarea textarea-bordered col-span-2"
                  {...register("deliveryInstruction")}
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6">
            <p className="text-sm text-gray-500 mb-4">
              * PickUp Time 4pm-7pm Approx.
            </p>

            <button className="btn btn-primary text-black w-64">
              Proceed to Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}