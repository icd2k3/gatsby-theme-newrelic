import { useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from '@reach/router';

const toQueryString = (queryParams) =>
  Array.from(queryParams.keys()).length ? `?${queryParams}` : '';

const useQueryParams = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = useMemo(() => new URLSearchParams(location.search), [
    location.search,
  ]);

  const setQueryParam = useCallback(
    (key, value) => {
      queryParams.set(key, value);

      navigate(toQueryString(queryParams) || location.pathname);
    },
    [queryParams, navigate, location.pathname]
  );

  const deleteQueryParam = useCallback(
    (key) => {
      queryParams.delete(key);

      navigate(toQueryString(queryParams) || location.pathname);
    },
    [queryParams, navigate, location.pathname]
  );

  return { queryParams, setQueryParam, deleteQueryParam };
};

export default useQueryParams;
