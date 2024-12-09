import Link from 'next/link';
import Tooltips from '@/app/components/ui/Tooltips';
import { LogIn, LogOut } from 'lucide-react';
import { authUserSession } from '@/lib/auth';

const UserActionButton = async () => {
  const user = await authUserSession();

  return (
    <div>
      {user ? (
        <Link href={'/api/auth/signout'}>
          <Tooltips text="logOut">
            <button className="rounded-full p-3 bg-secondary">
              <LogOut />
            </button>
          </Tooltips>
        </Link>
      ) : (
        <Link href={'/api/auth/signin'}>
          <Tooltips text="logIn">
            <button className="rounded-full p-3 bg-secondary">
              <LogIn />
            </button>
          </Tooltips>
        </Link>
      )}
    </div>
  );
};

export default UserActionButton;
