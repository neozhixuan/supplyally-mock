type TrackerDatesProps = {
  date: string;
  time: string;
  details: string;
};

const TrackerDates = (props: TrackerDatesProps) => {
  return (
    <div>
      <span className="mb-5 font-bold">{props.date}</span>
      <span className="flex flex-row space-x-5">
        <span>{props.time}</span>
        <span>{props.details}</span>
      </span>
    </div>
  );
};

export default TrackerDates;
