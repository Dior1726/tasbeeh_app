import router from "../router";

export default function useGoBack() {
  const goBack = () => {
    router.go(-1);
  };

  return { goBack };
}
