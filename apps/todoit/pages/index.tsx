import { useSelector } from 'react-redux';

export function Index() {
  const initial = useSelector((state: any) => state.todoit.initial);
  return (
    <div>
      {initial}
    </div>
  );
}

export default Index;
