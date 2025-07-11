import { useQuery } from '@tanstack/react-query';
import { fetchUrls } from '../api/urlService';

const useUrls = () => {
  return useQuery({
    queryKey: ['urls'],
    queryFn: fetchUrls,
  });
};

export default useUrls;
