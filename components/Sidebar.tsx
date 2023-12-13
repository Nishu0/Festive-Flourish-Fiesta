"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const menuItems = [
  {
    id: 1,
    title: "Presents",
    icon: "🎁",
    path: "/",
  },
  {
    id: 2,
    title: "Calendar",
    icon: "📅",
    path: "/todos",
  },
  {
    id: 3,
    title: "Reindeers",
    icon: "🦌",
    path: "/staff",
  },
  {
    id: 4,
    title: "Notification",
    icon: "🔔",
    path: "/notifications",
  },
];
export default function Sidebar() {
  const searchParams = useSearchParams();

  return (
    <div
      className="static md:fixed top-8 left-8 bottom-8 w-full md:w-72 bg-white drop-shadow-md rounded-md"
      style={{ minHeight: "500px" }}
    >
      <div className="py-12 flex flex-col items-center">
        <img
          src="https://res.cloudinary.com/dyk5s8gbw/image/upload/v1702485398/lur4ajqmwg6iiwqa2n9q.jpg"
          alt="avatar"
          className="w-32 h-32 rounded-full"
        />
        <h2 className="mt-4 text-xl font-semibold text-gray-800">
          Santa Claus 🎄
        </h2>
        <div className="mt-12">
          <ul>
            {menuItems.map((i) => (
              <li key={i.id} className="py-2">
                <Link
                  href={i.path}
                  className="flex items-center py-1 px-3 w-36 rounded-full"
                  style={{
                    border: "1px solid #b7aeac",
                    background:
                      searchParams.get("path") === i.path ? "#ffe6e5" : "white",
                  }}
                >
                  <span className="w-6">{i.icon}</span>
                  <span>{i.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
