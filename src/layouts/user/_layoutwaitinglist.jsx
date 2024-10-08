import EmailFormWaiting from "../../componenets/user/waitinlistform";

export default function Waitinglist() {
  return (
    <>
      <section className="h-dvh grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:h-full h-80 bg-[#1faf73] relative overflow-hidden">
          <img
            src="/banner.png"
            alt="Mobile App Screenshots"
            className="object-contain mt-8 md:mt-24 px-14 object-bottom w-full h-full"
          />
        </div>

        <main className="flex flex-col gap-8 mt-8 justify-center px-6 pb-10">
          <h1 className="font-semibold tracking-tight text-zinc-900 text-3xl leading-tight md:text-4xl max-w-lg">
            Join Hajam: Reserve your Place, find the closest, Find the Best!
          </h1>
          <p className="text-gray-500">
            Join the waitlist to be notified when our app is available!
          </p>

          <EmailFormWaiting />
        </main>
      </section>
    </>
  );
}
