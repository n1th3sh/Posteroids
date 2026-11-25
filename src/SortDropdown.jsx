import React, { useEffect, useId, useRef, useState } from 'react';

function SortDropdown({ value, options, onChange, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const menuId = useId();
  const selectedOption = options.find((option) => option.value === value) || options[0];

  useEffect(() => {
    if (!isOpen) return undefined;

    const handlePointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setIsOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const chooseOption = (option) => {
    onChange(option.value);
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div className="sort-dropdown" ref={rootRef}>
      <button
        ref={triggerRef}
        className={`sort-trigger${isOpen ? ' is-open' : ''}`}
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="sort-trigger-icon"><i className="fa-solid fa-arrow-down-wide-short" aria-hidden="true"></i></span>
        <span className="sort-trigger-value">{selectedOption?.label || label}</span>
        <i className={`fa-solid fa-chevron-down sort-trigger-chevron${isOpen ? ' is-open' : ''}`} aria-hidden="true"></i>
      </button>

      {isOpen && (
        <div className="sort-menu" id={menuId} role="menu" aria-label={label}>
          <span className="sort-menu-heading">SORT COLLECTION</span>
          {options.map((option) => (
            <button
              key={option.value}
              className={`sort-option${option.value === value ? ' is-selected' : ''}`}
              type="button"
              role="menuitemradio"
              aria-checked={option.value === value}
              onClick={() => chooseOption(option)}
            >
              <span>{option.label}</span>
              {option.value === value && <i className="fa-solid fa-check" aria-hidden="true"></i>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SortDropdown;
