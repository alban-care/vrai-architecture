import Image from "next/image";
import { aboutMe, services } from "@/lib/config";

export default function Services() {
  return (
    <main className="container mx-auto lg:px-48 2xl:px-32 3xl:px-0 w-full h-full flex flex-col items-center lg:[&>*:nth-child(even)]:flex-row-reverse gap-4">
      <div className="w-full border-b-2 border-muted p-4">
        <h1>À propos</h1>
      </div>
      <section
        id="profile"
        className="flex justify-center items-center flex-col-reverse w-100 h-100 lg:flex-row lg:items-center gap-4"
      >
        <div className="flex flex-col w-full h-full gap-2 lg:w-1/2">
          <div className="px-6">
            <div className="flex flex-col w-full pb-4 mb-4 border-b-2 border-muted gap-2">
              <h2>{aboutMe.title}</h2>
              {aboutMe.subtitles.map((subtitle, index) => (
                <h3 key={index}>{subtitle}</h3>
              ))}
            </div>
            <div className="flex flex-col w-full gap-2">
              {aboutMe.content.map((content, index) => (
                <p key={index}>{content}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-full lg:w-1/2 p-5">
          <div className="relative">
            <Image
              src={aboutMe.image.src}
              alt={aboutMe.image.alt}
              className="rounded-full w-auto h-auto"
              width={300}
              height={300}
              priority
            />
            <span className="absolute top-0 end-0 bg-background rounded-full w-24 h-24" />
            <h6 className="sr-only">Profil d'Isabelle Vandeville Roye</h6>
          </div>
        </div>
      </section>
      {services.map((service, index) => (
        <section
          key={index}
          id={service.title.toLowerCase()}
          className="flex flex-col justify-center items-center w-100 h-100 gap-4 lg:flex-row"
        >
          <div className="flex flex-col w-full gap-2 lg:w-1/2">
            <div className="px-6">
              <div className="flex flex-col w-full pb-4 mb-4 border-b-2 border-muted gap-2">
                <h2>{service.title}</h2>
                {service.subtitles.map((subtitle, index) => (
                  <h3 key={index}>{subtitle}</h3>
                ))}
              </div>
              <div className="flex flex-col w-full gap-2 text-justify">
                {service.content.map((content, index) => (
                  <p key={index}>{content}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center h-full lg:w-1/2 p-5">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              className="w-auto h-auto"
              width={300}
              height={300}
              priority
            />
          </div>
        </section>
      ))}
    </main>
  );
}
