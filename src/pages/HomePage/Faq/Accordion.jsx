import React from 'react';

const Accordion = () => {
    return (
        <div className='space-y-3.5 pb-12'>

            <details className="collapse focus:bg-[#067A8710]  rounded-2xl  border border-[#067A87]" name="my-accordion-det-1" open>
                <summary className="collapse-title font-semibold text-[#03373D]">How do I send a parcel?</summary>
                <div className="collapse-content text-sm">Create an account, enter pickup and delivery details, then confirm your parcel booking. Our delivery agent will collect it from your location.</div>
            </details>

            <details className="collapse rounded-2xl bg-[#067A8710] border border-base-300" name="my-accordion-det-1">
                <summary className="collapse-title font-semibold text-[#03373D]">How long does delivery take?</summary>
                <div className="collapse-content text-sm">Delivery time depends on location. Inside city deliveries usually take 24 hours, while outside city deliveries may take 2–3 business days.</div>
            </details>

            <details className="collapse bg-[#067A8710] rounded-2xl border border-base-300" name="my-accordion-det-1">
                <summary className="collapse-title font-semibold text-[#03373D]">Can I track my parcel?</summary>
                <div className="collapse-content text-sm">Yes, every parcel comes with a tracking ID. You can easily track your delivery status in real time from your dashboard.</div>
            </details>

            <details className="collapse bg-[#067A8710] rounded-2xl border border-base-300" name="my-accordion-det-1">
                <summary className="collapse-title font-semibold text-[#03373D]">What items are not allowed for delivery?</summary>
                <div className="collapse-content text-sm">We do not allow illegal items, hazardous materials, or restricted goods. Please check our delivery policy before booking.</div>
            </details>

            <details className="collapse bg-[#067A8710] rounded-2xl border border-base-300" name="my-accordion-det-1">
                <summary className="collapse-title font-semibold text-[#03373D]">Do you offer cash on delivery (COD)?</summary>
                <div className="collapse-content text-sm">Yes, we offer cash on delivery service. You can collect payment from your customer and receive it through your preferred payout method.</div>
            </details>

        </div>
    );
};

export default Accordion;