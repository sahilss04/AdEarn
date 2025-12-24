
import Header from '@/components/Header';
import { PlayArrow, People, NavigateNext } from '@mui/icons-material';

export default function Dashboard() {
  // Dummy data, ideally dynamic in real app
  const coins = 250;
  const today = 285.16;
  const total = 500.83;

  const recentTasks = [
    { date: '04/24/2024', task: 'Invited Friend', reward: '+10 Coins', amount: '+₹1.00' },
    { date: '04/24/2024', task: 'Ad Watched', reward: '+10 Coins', amount: '+₹1.00' },
    { date: '04/24/2024', task: 'Ad Watched', reward: '+10 Coins', amount: '+₹1.00' },
    { date: '04/24/2024', task: 'Invited Friend', reward: '+10 Coins', amount: '+₹1.00' },
    { date: '04/24/2024', task: 'Ad Watched', reward: '+10 Coins', amount: '+₹1.00' },
    { date: '04/24/2024', task: 'Ad Watched', reward: '+10 Coins', amount: '+₹1.00' },
  ];

  return (
    <main className="max-h-screen max-w-screen bg-[#eef]">

      <section className="flex-1 flex flex-col">

        <Header />

        <div className="flex flex-col gap-4 px-2 py-3">
          <div className="bg-white p-3 border border-[#ccd] rounded">
            <h2 className="mb-2 text-[19px] text-[#558] font-semibold">
              <span className="text-orange-500 text-3xl">
                Hello, Sahil
              </span> <br />
              Welcome Back
            </h2>

            <div className="grid grid-cols-2 gap-2">

              <div className="bg-blue-600 text-white rounded-md flex items-center gap-2 p-2 text-2xl shadow-lg h-15">
                🪙
                <div className="flex flex-col items-start justify-center">
                  <span className="text-xs text-nowrap">Your Coins</span>
                  <span className="font-bold">{coins}</span>
                </div>
              </div>

              <div className="bg-orange-500 text-white rounded-md flex items-center gap-2 p-2 text-3xl shadow-lg h-15">
                ₹
                <div className="flex flex-col items-start justify-center text-2xl">
                  <span className="text-xs text-nowrap">Today</span>
                  <span className="font-bold">{today.toFixed(2)}</span>
                </div>
              </div>

              <div className="bg-green-600 text-white rounded-md flex items-center gap-2 p-2 text-2xl shadow-lg h-15 col-span-2">
                💸
                <div className="flex flex-col items-start justify-center text-2xl">
                  <span className="text-xs text-nowrap">Total Earning</span>
                  <span className="font-bold">{total.toFixed(2)}</span>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-white p-3 border border-[#ccd] rounded flex flex-col gap-2">

            <button className="flex items-center justify-between w-full p-3 bg-orange-500 rounded-md text-white h-12.5 shadow-md">
              <div className="flex gap-5 items-center">
                <PlayArrow sx={{ fontSize: '30px' }} />
                <span className="font-semibold">Watch Ad & Earn</span>
              </div>

              <span className="bg-white text-orange-500 rounded-full px-2 py-1 text-xs font-semibold">+10 Coins ⟩</span>
            </button>

            <button className="flex items-center justify-start gap-3 font-semibold w-full p-3 bg-blue-600 rounded-md text-white h-12.5 shadow-md">
              <People sx={{ fontSize: "28px" }} />
              <span>Invite Friends <NavigateNext /></span>
            </button>
          </div>

          <div className="bg-white border border-[#ccd] rounded h-65">
            <div className="flex items-center justify-between p-2">
              <h3 className="font-semibold text-lg">Recent Earnings</h3>
              <a className="text-blue-600 hover:underline text-sm">View All &gt;</a>
            </div>

            <div className="w-full">
              <div className="grid grid-cols-4 text-center font-semibold border-t border-[#ccd] py-2">
                <span className="">Date</span>
                <span className="">Task</span>
                <span className="">Reward</span>
                <span className="">Amount</span>
              </div>

              <div>
                {recentTasks.map(({ date, task, reward, amount }, idx) => (
                  <div key={idx} className="grid grid-cols-4 text-center text-xs p-2 text-nowrap font-semibold border-t border-[#ccd]">
                    <span className="">{date}</span>
                    <span className="">{task}</span>
                    <span className="text-orange-500">{reward}</span>
                    <span className="">{amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};