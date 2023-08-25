import FeedbackForm from "./component/FeedbackForm";

export default function Feedback() {
  return (
    <div className="max-w-screen-md mx-auto min-h-[70vh]">
      <div className="flex flex-col">
        <p className="text-3xl mb-1.5">Feedback</p>
        <FeedbackForm />
      </div>
    </div>
  );
}
