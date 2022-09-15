import { Navigation } from '../../Navigation'
import { useLocation } from 'react-router-dom'

export function HandleRedirect() {
  let location = useLocation();
  return (
    <>
      <Navigation to="/login" state={{ from: location }} replace />;
    </>

  )
}