export default function Menu() {
  return (
    <ul className="gap-1">
      {[
        {
          title: "Home",
          icon: "home",
        },
        {
          title: "Products",
          icon: "Products",
        },
      ].map((item, index) => (
        <li key={item.title} className="px-4 py-2">
          {item.title}
        </li>
      ))}
    </ul>
  );
}
