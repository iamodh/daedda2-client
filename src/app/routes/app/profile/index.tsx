import { Spinner } from '@/components/ui/spinner';
import { ProfileView } from '@/features/profile/components/profile-view';
import { useAuth } from '@/lib/auth';
import { Suspense } from 'react';

const ProfileRoute = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div>
      <Suspense
        fallback={
          <div>
            <Spinner />
          </div>
        }
      >
        <ProfileView userId={user?.id} />
      </Suspense>
    </div>
  );
};

export default ProfileRoute;
