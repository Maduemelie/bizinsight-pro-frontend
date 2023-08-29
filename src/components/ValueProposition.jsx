import React from 'react';
import '../style/ValueProposition.css';

const ValueProposition = () => {
  return (
    <div className="value-proposition">
      <h2>Unlock the Power of BizInsight Pro</h2>
      <p className="value-description">
        BizInsight Pro is your ultimate business companion, designed to transform the way you operate.
        With advanced analytics, seamless inventory management, deep customer insights, and precise financial tracking,
        you can make informed decisions that drive growth and efficiency.
      </p>
      <p className="value-benefits">
        Discover how BizInsight Pro can help you:
        <ul>
          <li>Optimize sales strategies with comprehensive analytics.</li>
          <li>Efficiently manage inventory to prevent stockouts and overstocking.</li>
          <li>Understand your customers' preferences and behavior for targeted engagement.</li>
          <li>Track finances with accuracy, enabling smarter financial planning.</li>
          {/* Add more benefits as needed */}
        </ul>
      </p>
    </div>
  );
}

export default ValueProposition;
