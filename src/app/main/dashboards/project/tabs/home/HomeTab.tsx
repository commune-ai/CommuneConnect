import { motion } from "framer-motion";
import SummaryWidget from "./widgets/SummaryWidget";
import OverdueWidget from "./widgets/OverdueWidget";
import IssuesWidget from "./widgets/IssuesWidget";
import FeaturesWidget from "./widgets/FeaturesWidget";
import GithubIssuesWidget from "./widgets/GithubIssuesWidget";
import TaskDistributionWidget from "./widgets/TaskDistributionWidget";
import ScheduleWidget from "./widgets/ScheduleWidget";
import AnalyticsWidget from "./widgets/AnalyticsWidget";
import RecentRequestsWidget from "./widgets/RecentRequestsWidget";
import MostusedmodulesWidget from "./widgets/MostusedmodulesWidget";
import { useEffect, useState } from "react";
import { getInfos, getStats } from "src/api/dashboards/project-api";

/**
 * The HomeTab component.
 */
function HomeTab() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  const [info, setInfo] = useState({
    total_module: 0,
    total_user: 0,
    module_pending: 0,
    review_request: 0,
  });
  const [stats, setStats] = useState({
    circulating_supply: 0,
    total_stake: 0,
    total_subnets: 0,
    total_validators: 0,
    total_miners: 0,
    total_modules: 0,
    price: 0,
    marketcap: 0,
    daily_emission: 0,
    total_stakers: 0,
    avg_apy: 0,
  });

  useEffect(() => {
    getInfos()
      .then((data) => {
        setInfo(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    getStats()
      .then((data) => {
        setStats(data.stats);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 w-full min-w-0 p-24"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item}>
        <SummaryWidget total_module={info?.total_module} />
      </motion.div>
      <motion.div variants={item}>
        <OverdueWidget total_user={stats?.total_stakers} />
      </motion.div>
      <motion.div variants={item}>
        <IssuesWidget module_pending={info?.module_pending} />
      </motion.div>
      <motion.div variants={item}>
        <FeaturesWidget review_request={info?.review_request} />
      </motion.div>
      <motion.div variants={item} className="sm:col-span-2 md:col-span-2">
        <GithubIssuesWidget />
      </motion.div>
      <motion.div variants={item} className="sm:col-span-2 md:col-span-2">
        <AnalyticsWidget />
      </motion.div>

      <motion.div variants={item} className="sm:col-span-2 md:col-span-2">
        <RecentRequestsWidget />
      </motion.div>

      <motion.div variants={item} className="sm:col-span-2 md:col-span-2">
        <MostusedmodulesWidget />
      </motion.div>
    </motion.div>
  );
}

export default HomeTab;
