import Steps from '@/components/Steps';

export default function Home() {
    return (
        <div className="flex flex-col w-full h-full p-5">
            <div className="flex flex-row w-full h-full">
                <div className="w-1/4 h-full">
                    <div className="flex flex-col w-full h-full">
                        <Steps />
                    </div>
                </div>
                <div className="w-3/4 h-full">Preview</div>
            </div>
        </div>
    );
}
