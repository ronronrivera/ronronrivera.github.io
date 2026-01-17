const SuspensionInfoCard = () => {
  return (
    <div className="w-80 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-4 text-sm">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
        Service temporarily suspended
      </h3>

      <p className="text-gray-700 dark:text-gray-400 mb-3">
        This project is hosted on Render using free-tier resources. The owner has
        reached the monthly limit of 750 free instance hours, causing the
        following services to be temporarily suspended:
      </p>

      <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 mb-3">
        <li>gethired.io</li>
        <li>simple-commerce</li>
        <li>n8n</li>
        <li>n8n-1</li>
      </ul>

      <p className="text-gray-700 dark:text-gray-400 mb-3">
        These services will automatically resume at the start of the next
        calendar month when the free usage quota resets.
      </p>

      <p className="text-gray-700 dark:text-gray-400 mb-3">
        The service owner can restore availability immediately by upgrading to a
        paid instance on Render.
      </p>

      <p className="text-gray-500 dark:text-gray-500 mt-4">
        Hosting provided by Render
      </p>
    </div>
  );
};

export default SuspensionInfoCard;
