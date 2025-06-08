import clsx from 'clsx';

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

type Props = {
  title?: string;
  name?: string;
  value?: string;
  options: Option[];
  direction?: 'vertical' | 'horizontal';
  gap?: number;
  onChange: (value: string) => void;
};

const RadioGroup = ({
  title,
  name,
  value,
  options,
  direction = 'vertical',
  gap = 8,
  onChange,
}: Props) => {
  return (
    <fieldset>
      {title && (
        <legend className="dangol-typo-body2-regular font-medium text-neutral-500 mb-2">
          {title}
        </legend>
      )}
      <div
        className={clsx('flex', direction === 'vertical' && 'flex-col')}
        style={{
          gap: `${gap}px`,
        }}
      >
        {options.map((option) => {
          const id = `${name}-${option.value}`;
          return (
            <label
              key={option.value}
              htmlFor={id}
              className={clsx(
                'inline-flex items-center gap-2',
                option.disabled ? 'cursor-not-allowed' : 'cursor-pointer',
              )}
            >
              <input
                type="radio"
                id={id}
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={() => {
                  if (!option.disabled) {
                    onChange(option.value);
                  }
                }}
                className="sr-only"
              />
              <span
                className={clsx(
                  'w-4.5 h-4.5 inline-flex items-center justify-center rounded-full border-[1.5px] bg-white',
                  value === option.value ? 'border-brand-700' : 'border-neutral-300',
                  option.disabled && 'border-neutral-400',
                )}
              >
                <span
                  className={clsx(
                    'w-3 h-3 inline-block rounded-full bg-brand-700',
                    value === option.value ? 'opacity-100' : 'opacity-0',
                    option.disabled && 'bg-neutral-400',
                  )}
                />
              </span>
              <span
                className={clsx(
                  'dangol-typo-body2-regular',
                  option.disabled ? 'text-neutral-600' : 'text-neutral-800',
                )}
              >
                {option.label}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
};

export default RadioGroup;
