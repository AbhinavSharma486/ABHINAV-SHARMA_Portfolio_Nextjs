import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-800">
      <div className="text-center w-3/4 py-20 px-5 bg-[#ffffffd6] shadow-lg">
        <h2 className="text-5xl lg:text-9xl bg-gradient-to-r bg-clip-text text-transparent from-blue-400 to-purple-400">
          404
        </h2>
        <p className="text-3xl my-5 text-gray-900">OOPS! PAGE NOT FOUND</p>
        <p className="text-xl text-gray-900">
          The page you are looking for doesn't exist.
        </p>
        <div className="mt-16">
          <Link href="/">
            <button className="bg-blue-500 text-white px-6 py-2 rounded">
              RETURN HOME
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
