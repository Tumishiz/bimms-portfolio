'use client';

import { Laptop, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

const themes = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Laptop },
] as const;

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const systemIsDark = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;
  const resolvedTheme =
    theme === 'system' ? (systemIsDark ? 'dark' : 'light') : theme;

  root.classList.remove('light', 'dark');
  root.classList.add(resolvedTheme);
  root.style.colorScheme = resolvedTheme;
}

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const initialTheme: Theme =
      savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'system'
        ? savedTheme
        : 'system';

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const syncSystemTheme = () => theme === 'system' && applyTheme('system');

    media.addEventListener('change', syncSystemTheme);
    return () => media.removeEventListener('change', syncSystemTheme);
  }, [theme]);

  const selectTheme = (nextTheme: Theme) => {
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <div
      className="flex items-center rounded-full border border-border bg-secondary/60 p-1"
      role="group"
      aria-label="Color theme"
    >
      {themes.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          type="button"
          onClick={() => selectTheme(value)}
          className={`grid size-8 place-items-center rounded-full transition-colors ${theme === value ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
          aria-label={`Use ${label.toLowerCase()} theme`}
          aria-pressed={theme === value}
          title={label}
        >
          <Icon className="size-3.5" aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}
