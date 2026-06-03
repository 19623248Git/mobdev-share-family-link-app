import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router';

export default function InvitePage() {
        const { familyId } = useParams();

        const [searchParams] = useSearchParams();
        const code = searchParams.get('code');

        return (
                <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full text-center">
                        <h1 className="text-2xl font-bold text-slate-800 mb-2">
                                Join The Family Now!
                        </h1>

                <div className="bg-slate-50 rounded-lg p-4 mb-6 border border-slate-100 text-left">
                        <div className="mb-2">
                                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                        Family ID
                                </span>
                                <p className="text-slate-800 font-mono text-lg">
                                        {familyId || 'Missing!'}
                                </p>
                        </div>
                        <div>
                                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                        Invite Code
                                </span>
                                <p className="text-slate-800 font-mono text-lg">
                                        {code || 'Missing!'}
                                </p>
                        </div>
                </div>
        </div>
  );
}