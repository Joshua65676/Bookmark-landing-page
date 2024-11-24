
// const [stickyClass, setStickyClass] = useState<boolean>(false);
// const stickNavbar = () => {
//     if (window !== undefined) {
//       let windowHeight = window.scrollY;
//       windowHeight > 50 ? setStickyClass(true) : setStickyClass(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", stickNavbar);
//     return () => window.removeEventListener("scroll", stickNavbar);
//   }, []);

//   className={`fixed top-0 left-0 right-0 z-50  ${
//     stickyClass ? "bg-white/20 backdrop-blur-sm border-b border-slate-300 shadow-lg" : ""
//   }`}