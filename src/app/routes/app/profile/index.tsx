import { ProfileView } from '@/features/profile/components/profile-view';
import { ProfileViewSkeleton } from '@/features/profile/components/profile-view-skeleton';
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
            <ProfileViewSkeleton />
          </div>
        }
      >
        <ProfileView userId={user?.id} />
      </Suspense>
    </div>
  );
};

export default ProfileRoute;
