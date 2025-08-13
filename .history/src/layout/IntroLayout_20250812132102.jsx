import Button from "../ui/Button";

export default function IntroLayout({ img, description, buttonMessage }) {
  return (
    <section>
      <div className="flex h-full  flex-wrap p-2 border-yellow-500 border-8 m-3">
        <img src={img} className="inline-block w-full  h-56 object-cover" />
        <p className="break-words mt-2 text-center ">{description}</p>
        <Button style={"mx-auto"} message={buttonMessage} path={} />
      </div>
    </section>
  );
}
