import Image from "next/image";
import { createConnection } from "../lib/db";
import Link from "next/link";

// Define the Blog type
interface Blog {
  slug: string;
  title: string;
  image: string;
}

export async function getStaticProps() {
  const db = await createConnection();
  const [blogs]: [Blog[]] = await db.execute('SELECT slug, title, image FROM blogs');
  await db.end();

  return {
    props: {
      blogs: blogs || [],
    },
  };
}

const HomePage = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Blog List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
          >
            <Link href={`/blogs/${blog.slug}`} className="block">

                <div className="relative">
                  {/* Placeholder Image */}
                  <div className="bg-gray-300 h-48 w-full">
                  <Image src={`/images/${blog.image}`} alt="Placeholder" width={500} height={500} 
                    className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent text-white p-4">
                    <h3 className="text-xl font-semibold">{blog.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700">
                    {/* You can add a short description here if you want */}
                    This is a brief description of the blog post. You can add more content here.
                  </p>
                </div>

            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
