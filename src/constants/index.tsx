import { bgdots, chromelogo, firefoxlogo, operalogo } from "../assets";

export const NavLink = [
  { id: "link-1", title: "Features", link: "/" },
  { id: "link-2", title: "Pricing", link: "/" },
  { id: "link-3", title: "Contact", link: "/" },
];

export const FeaturesLink = [
  { id: "list-1", title: "Simple Bookmarking" },
  { id: "list-2", title: "Speedy Searching" },
  { id: "list-3", title: "Easy Sharing" },
];

export const Extensions = [
  {
    id: "extensions-1",
    image: chromelogo,
    title: "Add to Chrome",
    version: "Minimum version 62",
    dotbg: bgdots,
    addbutton: "Add & Install Extension",
  },
  {
    id: "extensions-2",
    image: firefoxlogo,
    title: "Add to Firefox",
    version: "Minimum version 55",
    dotbg: bgdots,
    addbutton: "Add & Install Extension",
  },
  {
    id: "extensions-3",
    image: operalogo,
    title: "Add to Opera",
    version: "Minimum version 46",
    dotbg: bgdots,
    addbutton: "Add & Install Extension",
  },
];

export const QuestionLists = [
  {
    id: "list-1",
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    id: "list-2",
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    id: "list-3",
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    id: "list-4",
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];
