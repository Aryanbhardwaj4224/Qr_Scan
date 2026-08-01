import Avatar from './Avatar';
import Bio from './Bio';
import { profile } from '../../data/profile';

/**
 * ProfileHeader — Composes Avatar + Bio into the top profile section.
 * Reads from the static profile data configuration.
 */
export default function ProfileHeader() {
  return (
    <div className="flex flex-col items-center">
      <Avatar src={profile.avatar} alt={profile.name} />
      <Bio name={profile.name} title={profile.title} bio={profile.bio} />
    </div>
  );
}
