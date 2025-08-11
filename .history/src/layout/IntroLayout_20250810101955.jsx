import Button from "../../ui/Button";

export default function MenuIntro({img,description}) {
  return (
    <section>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-wrap p-2 border-yellow-500 border-8 m-3">
          <img
            src="./pizza1.jpg"
            className="inline-block w-full  h-56 object-cover"
          />
          <p className="break-words mt-2 text-center ">
            {description}
          </p>
          <Button style={"mx-auto"}  message={"مشاهده منو"} />
        </div>
      </div>
    </section>
  );
}
