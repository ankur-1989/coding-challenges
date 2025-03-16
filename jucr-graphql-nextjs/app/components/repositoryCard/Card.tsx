import React from "react";
import { Star } from "lucide-react";
import styles from "@/components/repositoryCard/card.module.scss";
import Image from "next/image";

const RepositoryCard = ({ repository }) => {
  return (
    <div className={styles.repositoryCard}>
      <div className={styles.header}>
        <Image
          src={repository.owner.avatarUrl}
          alt={repository.owner.login}
          className={styles.avatar}
          width={40}
          height={40}
          loading="lazy"
        />
        <div>
          <h2 className={styles.repoName}>{repository.name}</h2>
          <p className={styles.repoOwner}>{repository.owner.login}</p>
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.description}>{repository.description}</p>

        <div className={styles.footer}>
          <div className={styles.stars}>
            <Star size={16} />
            <span>{repository.stargazerCount}</span>
          </div>
          <span
            className={`${styles.privacy} ${
              repository.isPrivate ? styles.private : styles.public
            }`}
          >
            {repository.isPrivate ? "Private" : "Public"}
          </span>
        </div>

        <div className={styles.languages}>
          {repository.languages.nodes.map((lang) => (
            <span key={lang.name} className={styles.language}>
              {lang.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepositoryCard;
