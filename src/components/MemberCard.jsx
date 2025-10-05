import ficBackground from '../assets/backgroundPattern.png';

function MemberCard({ member, isFeatured = false }) {
  
  if (isFeatured) {
    return (
      <div 
        className="rounded-2xl p-2 border-4 border-teal-300 shadow-xl"
        style={{ backgroundImage: `url(${ficBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="bg-white rounded-lg p-4 text-center">
          <div className="bg-orange-100 text-orange-700 text-sm font-semibold rounded-md p-1 mb-2">
            {member.role}
          </div>
          <img 
            src={member.imageUrl || 'https://via.placeholder.com/150'}
            alt={`Photo of ${member.name}`} 
            className="w-24 h-24 rounded-md mx-auto object-cover bg-gray-200 mb-2" 
          />
          <h4 className="font-bold text-gray-800">{member.name}</h4>
          <p className="text-xs text-gray-500 break-all">{member.email}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg p-4 text-center bg-white border border-gray-300 shadow-sm">
      <div className="bg-gray-100 text-gray-800 text-sm font-semibold rounded-md p-1 mb-2">
        {member.role}
      </div>
      <img 
        src={member.imageUrl || 'https://via.placeholder.com/150'}
        alt={`Photo of ${member.name}`} 
        className="w-24 h-24 rounded-md mx-auto object-cover bg-gray-200 mb-2" 
      />
      <h4 className="font-bold text-gray-800">{member.name}</h4>
      <p className="text-xs text-gray-500 break-all">{member.email}</p>
    </div>
  );
}

export default MemberCard;