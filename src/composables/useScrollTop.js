import { debounce } from "src/utils/debounce";

export default function useScrollTop() {
  const scrollTop = debounce(() => {
    window.scrollTo(0, 0);
  }, 150);

  return { scrollTop };
}
