import dynamic from "next/dynamic";
import MdxLayout from "@/app/mdx-layout";
import { getAllFilesData, getFileMetadata } from "@/actions";
import type { Metadata } from "next/types";

interface Params {
  params: {
    slug: string;
  };
}

export async function generateStaticPaths() {
  const paths = await generateStaticParams();
  return {
    paths,
    fallback: false,
  };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const projects = await getAllFilesData("projects");
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { metadata } = await getFileMetadata("projects", params.slug);

  return {
    title: `Vrai Architecture | ${metadata.title}`,
    description: metadata.description,
  };
}

export default async function Project({ params }: Params) {
  const MdxComponent = dynamic(
    () => import(`@/content/projects/${params.slug}.mdx`)
  );

  return (
    <MdxLayout>
      <MdxComponent />
    </MdxLayout>
  );
}
