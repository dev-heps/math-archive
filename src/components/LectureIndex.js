export function LectureIndex({ lectures, title = "강의 링크 목록", idPrefix = "KDS" }) {
  return (
    <section className="lecture-index" aria-labelledby="lecture-index-title">
      <div className="lecture-index__bar">
        <strong id="lecture-index-title">{title}</strong>
        <span>{lectures.length} links</span>
      </div>
      <div className="lecture-index__header" aria-hidden="true">
        <span>{idPrefix} ID</span>
        <span>강의 제목</span>
        <span>링크</span>
      </div>
      <div>
        {lectures.map((lecture) => (
          <article className="lecture-index__row" key={lecture.id}>
            <span className="lecture-index__id">{idPrefix}-{lecture.id}</span>
            <span className="lecture-index__title">{lecture.title}</span>
            <a
              className="lecture-index__link"
              href={lecture.url}
              rel="noreferrer"
              target="_blank"
            >
              영상
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
