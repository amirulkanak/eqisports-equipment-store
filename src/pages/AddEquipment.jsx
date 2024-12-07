import AddEquipmentForm from '../components/AddEquipmentForm';
import useAuth from '../hooks/useAuth';

const AddEquipment = () => {
  document.title = 'Add Equipment | EquiSports';
  const { user } = useAuth();

  return (
    <section data-aos="fade-in" className="max-width-wrapper my-20">
      <AddEquipmentForm userEmail={user.email} userName={user.displayName} />
    </section>
  );
};

export default AddEquipment;
