import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "SMS Updates & Opt-In", description: "Choose optional property inquiry text updates from Hilltop Home Co., a DBA of The Jays Dallas, LLC." };

export default function SmsPage() {
  return <>
    <PageHero title="Property updates, your choice." subhead="Hilltop Home Co. is a DBA of The Jays Dallas, LLC." compact />
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-3xl space-y-8 px-6 leading-relaxed text-charcoal lg:px-8">
        <h2 className="text-2xl font-semibold">Hilltop Home Co. Property Inquiry Updates</h2>
        <p>Request an offer through our home-buying brand, Hilltop Home Co. You can choose recurring automated text messages about your own property inquiry, offer updates, appointment reminders and closing updates. Message frequency varies. Message and data rates may apply.</p>
        <h2 className="text-xl font-semibold">How to opt in</h2>
        <ol className="list-decimal space-y-3 pl-6">
          <li>Open the Hilltop offer form below and enter your contact and property details.</li>
          <li>In “Almost Done,” read the SMS disclosure and select the optional SMS checkbox. It starts unchecked.</li>
          <li>Submit “Get My Offer” to save your inquiry and your SMS choice.</li>
        </ol>
        <p>Consent is not a condition of purchase or receiving an offer. You may submit the form without selecting SMS. Providing a phone number alone does not enroll you. This choice covers property inquiry texts only, not unrelated marketing or AI calls.</p>
        <a className="inline-block rounded-xl bg-primary px-8 py-4 font-semibold text-paper" href="https://hilltophome.co/get-an-offer?utm_source=thejaysdallas&amp;utm_medium=website&amp;utm_campaign=sms_opt_in">Open offer form &amp; choose SMS updates ↗</a>
        <p>Reply <strong>STOP</strong> to unsubscribe or <strong>HELP</strong> for help. Contact Julio at <a className="underline" href="tel:+12147010100">(214) 701-0100</a> or <a className="underline" href="mailto:julio@hilltophome.co">julio@hilltophome.co</a>.</p>
        <p>Mobile information and SMS opt-in consent are not sold or shared with third parties or affiliates for marketing or promotional purposes. Messaging service providers may process them only to operate the program.</p>
        <p className="flex flex-wrap gap-6"><Link className="underline" href="/privacy-policy">SMS Privacy Policy</Link><Link className="underline" href="/terms">SMS Terms &amp; Conditions</Link></p>
      </div>
    </section>
  </>;
}
