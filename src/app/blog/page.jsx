import { client } from "@/sanity.client";

export default async function BlogPage() {
  const posts = await client.fetch(`
    *[_type == "post"] | order(_createdAt desc){
      title,
      slug,
      excerpt,
      mainImage{
        asset->{
          url
        }
      }
    }
  `);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>Blog</h1>

      <div style={{ marginTop: "20px" }}>
        {posts.map((post) => (
          <a
            key={post.slug.current}
            href={`/blog/${post.slug.current}`}
            style={{
              display: "block",
              marginBottom: "20px",
              padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>

            {post.mainImage?.asset?.url && (
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                width="300"
                style={{ marginTop: "10px", borderRadius: "6px" }}
              />
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
