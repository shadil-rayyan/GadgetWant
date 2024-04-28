import { useRouter } from "next/router";
import Link from "next/link"; // Import Link for navigation within Next.js

const FrameComponent41 = () => {
  const router = useRouter();

  const onAccountIconClick = () => {
    router.push("/admin-dashboard");
  };

  return (
    <header className="self-stretch flex flex-col items-start justify-start pt-4 pb-8 px-4 box-border max-w-full text-left text-3xl text-black font-quicksand">
      <div className="flex flex-row items-center justify-between w-full max-w-full">
        <div className="flex items-center gap-2">
          <img
            className="h-10"
            loading="lazy"
            alt="Logo"
            src="/logo@2x.png"
          />
          <h2 className="text-xl font-bold">Gadgets Need</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <Link href="/categories">
              <span className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                All Categories
              </span>
            </Link>
            <input
              className="w-48 py-2 px-4 bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Search for items..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-4">
            <Link href="/wishlist">
              <span className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 transition-colors">
                <img
                  className="h-5"
                  alt="Wishlist"
                  src="/icon-1.svg"
                />
                Wishlist
              </span>
            </Link>
            <Link href="/cart">
              <span className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 transition-colors">
                <img
                  className="h-5"
                  alt="Cart"
                  src="/iconcartsvg@2x.png"
                />
                Cart
              </span>
            </Link>
          </div>
          <div>
            <button
              className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 transition-colors focus:outline-none"
              onClick={onAccountIconClick}
            >
              <img
                className="h-5"
                alt="Account"
                src="/acconut@2x.png"
              />
              Account
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent41;
