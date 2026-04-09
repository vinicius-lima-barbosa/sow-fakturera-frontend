import { useEffect } from "react";
import useMetadataStore from "../stores/metadata.store";

export function MetadataProvider({ children }) {
  const { getLanguages } = useMetadataStore();
  const loading = useMetadataStore((state) => state.loading);

  useEffect(() => {
    const init = async () => {
      await getLanguages();
    };

    init();
  }, [getLanguages]);

  if (loading) {
    return <div>Loading Metadata...</div>;
  }

  return <>{children}</>;
}
