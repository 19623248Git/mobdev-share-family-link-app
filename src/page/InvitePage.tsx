import { useParams, useSearchParams } from 'react-router';

export default function InvitePage() {

        const { familyId } = useParams();
        const [searchParams] = useSearchParams();
        const code = searchParams.get('code');

        const handleJoinClick = () => {
                
                if (familyId && code) {
                        const deepLink = `nimons360://family/${familyId}?code=${code}`;
                        console.log('Redirecting to:', deepLink);
                        
                        window.location.href = deepLink;

                } else {
                        console.error("Missing family ID or invite code in the URL.");
                }
        };

        return (
                <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full text-center">
                        <h1 className="text-2xl font-bold text-slate-800 mb-10">
                                Join The Family Now!
                        </h1>

                        <button 
                                onClick={handleJoinClick}
                                className="w-full bg-blue-600 text-white font-semibold py-3.5 px-4 rounded-xl shadow-md hover:bg-blue-700 transition-colors active:scale-95 transform duration-150"
                        >
                                Open App to Join
                        </button>

                </div>
        );
}