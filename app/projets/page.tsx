import MdxLayout from "@/app/mdx-layout";
import { getAllFilesData } from "@/actions";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateMetadata() {
  const projects = await getAllFilesData("projects");

  if (projects.length === 0) {
    return {
      title: "Vrai Architecture | Projets",
      description: "Découvrez les principaux projets de l'agence",
    };
  }

  return {
    title: `Vrai Architecture | ${projects.length} Projets`,
    description: "Découvrez les principaux projets de l'agence",
  };
}

export default async function Projects() {
  const projects = await getAllFilesData("projects");

  if (!projects) {
    return notFound();
  }

  if (projects.length === 0) {
    return (
      <MdxLayout>
        <h1>Projets</h1>
        <p>Aucun projet à afficher</p>
      </MdxLayout>
    );
  }

  return (
    <MdxLayout>
      <h1>Projets</h1>
      {projects.map((project) => (
        <div key={project.slug} className="flex items-center gap-2">
          <Link href={`/projets/${project.slug}`}>
            {project.metadata.title}
          </Link>
          <p>{project.metadata.description}</p>
        </div>
      ))}
    </MdxLayout>
  );
}
