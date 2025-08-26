import Image from 'next/image';
import styles from '../styles/Index.module.css';

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <Image
        src="/minhafoto.jpeg"
        alt="Foto do Perfil"
        width={150}
        height={150}
        className={styles.profileImg}
      />
      <div className={styles.profileText}>
        <h2>João Ferreira</h2>
        <p>
          Estudante de Sistemas para Internet pela UNICAP, técnico em redes de computadores pela ETEPLAP.
        </p>
      </div>
    </div>
  );
};

export default Profile;
