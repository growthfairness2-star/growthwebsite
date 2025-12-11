import { client } from "@/sanity.client";
import Image from "next/image";

export default async function BlogPost({ params }) {
  const { slug } = params;

  const post = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]{
      title,
      body,
      mainImage{
        asset->{
          url
        }
      }
    }
    `,
    { slug }
  );

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>{post.title}</h1>

      {post.mainImage?.asset?.url && (
        <img
          src={post.mainImage.asset.url}
          alt={post.title}
          style={{ marginTop: "20px", borderRadius: "10px", maxWidth: "600px" }}
        />
      )}

      <div style={{ marginTop: "20px", lineHeight: "1.7" }}>
        {post.body?.map((block, i) => (
          <p key={i}>{block.children?.[0]?.text}</p>
        ))}
      </div>
    </div>
  );
}
