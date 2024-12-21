import React, { useEffect, useState } from "react";

export default function Footer() {
  const [location, setLocation] = useState({ country: "", state: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your ipinfo.io API token (you can find it after signing up)
    const apiToken = "5a0b897749271d";

    // Fetch the user's location using ipinfo.io API
    fetch(`https://ipinfo.io?token=${apiToken}`)
      .then((response) => response.json())
      .then((data) => {
        // Destructure country and region (state) from the response
        const { country, region } = data;
        setLocation({ country, state: region || "N/A" });
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load location");
        setLoading(false);
      });
  }, []);

  return (
    <footer
      className="footer-container"
      style={{ marginTop: "50px", bottom: "0" }}
    >
      <div className="footer-wrapper">
        <div className="footer-content-1">
          <p className="footer-text-1">
            *Instant savings, otherwise referred to as instant cashback, is
            available with the purchase of an eligible product for qualifying
            Keystaxx Rewards Credit Cards and EasyPay Credit Cards only. Minimum
            transaction value of $100.00 applies.
            <a href="#">Click here</a> to see instant savings amounts and
            eligible devices. Instant savings is available for up to two orders
            per rolling 90-day period with an eligible card. Card eligibility is
            subject to terms and conditions between you and your card-issuing
            bank. Total transaction value is calculated after any trade-in
            credit or eligible discount applied. Any subsequent order
            adjustment(s) or cancellation(s) may result in instant savings being
            recalculated, and any refund may be adjusted to account for instant
            savings clawback; this may result in no refund being made to you.
            Offer may be revised or withdrawn at any time without any prior
            notice. <a href="#">Additional terms apply</a>. Offer cannot be
            combined with Keystaxx Store for Education or Corporate Employee
            Purchase Plan pricing. Multiple separate orders cannot be combined
            for instant savings.
          </p>
          <p className="footer-text-2">
            ‡No Cost EMI is available with the purchase of an{" "}
            <a href="#">eligible product</a> made using eligible cards on 3- or
            6-month tenures from most leading banks. Monthly pricing is rounded
            to the nearest dollar. Exact pricing will be provided by your bank,
            subject to your bank’s terms and conditions. Minimum order spend
            applies as per your card-issuing bank threshold. Offer cannot be
            combined with Keystaxx Store for Education or Corporate Employee
            Purchase Plan pricing. Card eligibility is subject to terms and
            conditions between you and your card-issuing bank. Offer may be
            revised or withdrawn at any time without any prior notice.
            <a href="#">Additional terms apply</a>.
          </p>
          <p className="footer-text-3">
            Representative example: Based on a 6-month tenure. $799.00 total
            cost includes 15% p.a. and No Cost EMI savings of $33.80, paid over
            6 months as six monthly payments of $133.17.
          </p>
          <p className="footer-text-4">
            A subscription is required for Keystaxx Premium Services.
          </p>
        </div>

        <div className="footer-links-3">
          <div className="footer-copyright">
            Copyright © 2023 Keystaxx. All rights reserved.
          </div>
          <div className="footer-link-3">Privacy Policy</div>
          <div className="footer-link-3">Terms of Use</div>
          <div className="footer-link-3">Sales Policy</div>
          <div className="footer-link-3">Legal</div>
          <div className="footer-link-3">Site Map</div>
          <div className="footer-country">
            {loading
              ? "Loading location..."
              : error
              ? "Location Error"
              : `${location.state}, ${location.country}`}
          </div>
        </div>
      </div>
    </footer>
  );
}
