import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Star,
  Users,
  GitCommit,
  Clock,
  Code,
  ExternalLink,
  Activity,
} from "lucide-react";

const GITHUB_USERNAME = "manipratap2";
const GITHUB_TOKEN = ""; 

const GitHubActivity = () => {
  const [githubData, setGithubData] = useState<any>({
    user: null,
    repos: [],
    commits: [],
    stats: { totalRepos: 0, totalStars: 0, totalCommits: 0, followers: 0 },
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const fetchGitHubData = async () => {
    try {
      setLoading(true);
      setError(null);
      const headers = GITHUB_TOKEN
        ? { Authorization: `token ${GITHUB_TOKEN}` }
        : {};

      const userRes = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}`,
        { headers }
      );
      if (!userRes.ok) throw new Error("Failed to fetch user");
      const user = await userRes.json();

      const reposRes = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
        { headers }
      );
      if (!reposRes.ok) throw new Error("Failed to fetch repos");
      const repos = await reposRes.json();

      const commitsPromises = repos.slice(0, 3).map(async (repo: any) => {
        try {
          const res = await fetch(
            `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/commits?per_page=3`,
            { headers }
          );
          const commits = res.ok ? await res.json() : [];
          return { repo: repo.name, commits };
        } catch {
          return { repo: repo.name, commits: [] };
        }
      });

      const commitsData = await Promise.all(commitsPromises);
      const allCommits = commitsData
        .flatMap(({ repo, commits }) =>
          commits.map((c: any) => ({ ...c, repo }))
        )
        .slice(0, 8);

      const stats = {
        totalRepos: user.public_repos || 0,
        totalStars: repos.reduce(
          (sum: number, r: any) => sum + (r.stargazers_count || 0),
          0
        ),
        totalCommits: allCommits.length,
        followers: user.followers || 0,
      };

      setGithubData({ user, repos, commits: allCommits, stats });
      setLoading(false);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  const truncateText = (text: string, maxLength: number) =>
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  if (loading)
    return (
      <section className="section-padding bg-black text-white min-h-screen flex flex-col items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        >
          <Github className="w-12 h-12 text-blue-400" />
        </motion.div>
        <p className="mt-4 text-gray-400">Loading GitHub activity...</p>
      </section>
    );

  if (error)
    return (
      <section className="section-padding bg-black text-white min-h-screen flex flex-col items-center justify-center">
        <Github className="w-12 h-12 text-gray-500 mb-4" />
        <p className="text-gray-400">{error}</p>
      </section>
    );

  return (
    <section className="section-padding bg-black text-white relative overflow-hidden min-h-screen">
      {/* 🌌 Space Background */}
      <motion.div className="absolute inset-0" style={{ zIndex: 0 }}>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
            animate={{
              y: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, 360, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"
        />
      </motion.div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
            GitHub{" "}
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">
              Activity
            </span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full shadow-lg"></div>
          <p className="text-gray-300 mt-4">
            Real-time overview of my repositories and commits
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[
            {
              label: "Repositories",
              value: githubData.stats.totalRepos,
              icon: Github,
              color: "text-blue-400",
            },
            {
              label: "Stars",
              value: githubData.stats.totalStars,
              icon: Star,
              color: "text-indigo-400",
            },
            {
              label: "Followers",
              value: githubData.stats.followers,
              icon: Users,
              color: "text-purple-400",
            },
            {
              label: "Commits",
              value: githubData.commits.length,
              icon: GitCommit,
              color: "text-blue-300",
            },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="bg-gray-900 p-6 rounded-xl text-center shadow-lg hover:shadow-[0_0_20px_8px_rgba(59,130,246,0.4)] transition-shadow duration-300"
              >
                <Icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Repos & Commits */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Repos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-[0_0_25px_10px_rgba(59,130,246,0.3)]"
          >
            <div className="flex items-center mb-4">
              <Github className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-xl font-semibold">Recent Repositories</h3>
            </div>
            <div className="space-y-3">
              {githubData.repos.map((repo: any, idx: number) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.03, x: 5 }}
                  className="block bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <h4 className="font-medium text-white">{repo.name}</h4>
                  {repo.description && (
                    <p className="text-gray-300 text-sm">
                      {truncateText(repo.description, 80)}
                    </p>
                  )}
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span className="flex items-center gap-1">
                      <Code className="w-3 h-3" /> {repo.language || "N/A"}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />{" "}
                      {formatDate(repo.updated_at)}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Commits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-[0_0_25px_10px_rgba(59,130,246,0.3)] max-h-[500px] overflow-y-auto"
          >
            <div className="flex items-center mb-4">
              <Activity className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-xl font-semibold">Recent Commits</h3>
            </div>
            <div className="space-y-3">
              {githubData.commits.map((commit: any, idx: number) => (
                <motion.div
                  key={commit.sha}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <p className="text-sm font-medium text-white">
                    {truncateText(commit.commit.message, 60)}
                  </p>
                  <div className="flex items-center text-xs text-gray-400 mt-1 justify-between">
                    <span className="font-medium">{commit.repo}</span>
                    <span>{formatDate(commit.commit.author.date)}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Full Profile Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-blue-500 px-6 py-2 rounded-lg text-black font-medium hover:bg-blue-400 transition-all duration-300 shadow-lg"
          >
            <Github className="w-5 h-5" />
            <span>View Full Profile</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubActivity;
