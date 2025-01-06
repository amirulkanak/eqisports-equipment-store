import { useLoaderData } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import UpdateEquipmentForm from '../components/UpdateEquipmentForm';

const MyEquipmentUpdate = () => {
  document.title = 'Update Equipment | EquiSports';
  window.scrollTo(0, 0);
  const { user } = useAuth();
  const { data: cardData } = useLoaderData();
  return (
    <section data-aos="fade-in" className="max-width-wrapper my-20">
      {cardData && (
        <UpdateEquipmentForm
          cardData={cardData}
          userEmail={user.email}
          userName={user.displayName}
        />
      )}
    </section>
  );
};

export default MyEquipmentUpdate;
