import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { teamData } from '../data/teamData.js';
import MemberCard from '../components/MemberCard.jsx';

// function responsible for displaying the sections and member cards
function ContentRenderer({ data, sectionTitle: initialSectionTitle }) {
  // Check if the received data is an array (it's a list of members)
  if (Array.isArray(data)) {
    const isFicSection = initialSectionTitle === "Faculty in Charge";
    
    return (
      <section 
        className="mb-12">  {/* Bottom margin to separate sections */}
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">{initialSectionTitle}</h2>
        
        <div className={isFicSection ? 'flex justify-center' : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'}>
          {data.map(member => (
            <MemberCard 
              key={member.id} 
              member={member}
              isFeatured={isFicSection}
            />
          ))}
        </div>
      </section>
    );
  }
  
  // check if the data contains more sections, if it does then call contentRenderer function again
  if (typeof data === 'object' && data !== null) {
    return <>{Object.entries(data).map(([sectionTitle, members]) => <ContentRenderer key={sectionTitle} data={members} sectionTitle={sectionTitle} />)}</>;
  }
  return null;
}

function TeamPage() {
  const navigate = useNavigate();
  // Destructure activeTab from the url
  const { activeTab: tabFromUrl } = useParams();
  
  // State for faculty, counsellors, students
  const [activeTab, setActiveTab] = useState('Faculty');
  // State for Buddy, WellBeingRepresentatives, managementTeam in Students section
  const [activeSubTab, setActiveSubTab] = useState(null);
  // State for UG or PG, Heads or Web or design etc under students section (third-level tab)
  const [activeTertiaryTab, setActiveTertiaryTab] = useState(null);
  
  // Get the keys from teamData ('Faculty', 'Counsellors', 'Students') to create the main tab buttons.
  const tabs = Object.keys(teamData);
  const currentTabData = teamData[activeTab];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`/team/${tab}`);
  }
  
  useEffect(() => {
    if (tabFromUrl) {
      setActiveTab(tabFromUrl);
    }
    // Dependency array: only re-run this effect if 'tabFromUrl' changes
  }, [tabFromUrl]);

  useEffect(() => {
    if (currentTabData && typeof currentTabData === 'object') {
      const firstSubTab = Object.keys(currentTabData)[0];
      setActiveSubTab(firstSubTab);
      setActiveTertiaryTab(null);
    }
  }, [activeTab]);

  useEffect(() => {
    if (activeSubTab && currentTabData && currentTabData[activeSubTab]) {
      const dataForSubTab = currentTabData[activeSubTab];
      const firstTertiaryTab = Object.keys(dataForSubTab)[0];
      if (typeof dataForSubTab[firstTertiaryTab] === 'object' && !Array.isArray(dataForSubTab[firstTertiaryTab])) {
        setActiveTertiaryTab(firstTertiaryTab);
      } else {
        setActiveTertiaryTab(null);
      }
    }
  }, [activeSubTab]);

  let contentData = currentTabData;
  let subTabs = [];
  let tertiaryTabs = [];
  
  if (contentData && typeof Object.values(contentData)[0] === 'object' && !Array.isArray(Object.values(contentData)[0])) {
    subTabs = Object.keys(contentData);
    if(activeSubTab) {
      contentData = contentData[activeSubTab];
      if (contentData && typeof Object.values(contentData)[0] === 'object' && !Array.isArray(Object.values(contentData)[0])) {
        tertiaryTabs = Object.keys(contentData);
        if(activeTertiaryTab) {
          contentData = contentData[activeTertiaryTab];
        } else {
          contentData = contentData[tertiaryTabs[0]];
        }
      }
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Main Tabs */}
      <div className="flex justify-center gap-4">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`
              px-8 py-2 rounded-lg font-semibold text-lg border-2 transition-colors
              ${activeTab === tab 
                ? 'bg-teal-400 text-white border-teal-400' // Active tab style
                : 'bg-white text-gray-600 border-teal-400 hover:bg-teal-50' // Inactive tab style
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <div className="my-8 h-3 bg-teal-300 w-full rounded-full"></div>

      {/* Subtab section */}
      {subTabs.length > 1 && (
        <div className="flex justify-center flex-wrap gap-3 mb-10 border-b pb-4">
          {subTabs.map(subTab => (
            <button
              key={subTab}
              onClick={() => setActiveSubTab(subTab)}
              className={`px-4 py-1 text-sm rounded-full font-semibold transition-colors ${activeSubTab === subTab ? 'bg-sunshine-orange text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {subTab}
            </button>
          ))}
        </div>
      )}

      {/* Tertiary-tab section */}
      {tertiaryTabs.length > 0 && (
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {tertiaryTabs.map(tertiaryTab => (
            <button
              key={tertiaryTab}
              onClick={() => setActiveTertiaryTab(tertiaryTab)}
              className={`px-3 py-1 text-xs rounded-full font-semibold transition-colors ${activeTertiaryTab === tertiaryTab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {tertiaryTab}
            </button>
          ))}
        </div>
      )}
      
      <ContentRenderer data={contentData} sectionTitle={activeTertiaryTab || activeSubTab || activeTab} />
    </div>
  );
}

export default TeamPage;