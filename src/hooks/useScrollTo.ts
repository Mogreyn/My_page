export const useScrollTo = () => {
    const scrollToSection = (
      id: string,
      position: ScrollLogicalPosition = "start"
    ) => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth", block: position });
    };
  
    return { scrollToSection };
  };