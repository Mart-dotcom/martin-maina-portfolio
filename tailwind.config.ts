
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				portfolio: {
					// Light mode colors
					"navy": "#0A192F",
					"light-navy": "#112240",
					"lightest-navy": "#233554",
					"slate": "#8892B0",
					"light-slate": "#A8B2D1",
					"lightest-slate": "#CCD6F6",
					"white": "#E6F1FF",
					"green": "#64FFDA",
					// Cyberpunk colors
					"cyber-black": "#0D0221",
					"cyber-dark": "#1A1F2C",
					"cyber-purple": "#8B5CF6",
					"cyber-blue": "#0FA0CE",
					"cyber-pink": "#FF2A6D",
					"cyber-yellow": "#FFD700",
					"cyber-teal": "#05D9E8",
					"cyber-orange": "#F97316",
					"cyber-green": "#01FFC3",
					"cyber-red": "#FE2D4E",
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				slideIn: {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				glitch: {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-3px, 3px)' },
					'40%': { transform: 'translate(-3px, -3px)' },
					'60%': { transform: 'translate(3px, 3px)' },
					'80%': { transform: 'translate(3px, -3px)' },
				},
				glow: {
					'0%': { textShadow: '0 0 5px #01FFC3, 0 0 10px #01FFC3, 0 0 15px #01FFC3' },
					'50%': { textShadow: '0 0 20px #01FFC3, 0 0 30px #01FFC3, 0 0 40px #01FFC3' },
					'100%': { textShadow: '0 0 5px #01FFC3, 0 0 10px #01FFC3, 0 0 15px #01FFC3' },
				},
				scanline: {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(100vh)' }
				},
				circuitFlow: {
					'0%': { backgroundPosition: '0% 0%' },
					'100%': { backgroundPosition: '100% 100%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 0.5s ease-out forwards',
				'slide-up': 'slideUp 0.5s ease-out forwards',
				'slide-in': 'slideIn 0.5s ease-out forwards',
				'glitch': 'glitch 0.5s infinite',
				'glow': 'glow 2s infinite',
				'scanline': 'scanline 4s linear infinite',
				'circuit-flow': 'circuitFlow 20s infinite linear'
			},
			backgroundImage: {
				'cyber-grid': "linear-gradient(#0FA0CE55 1px, transparent 1px), linear-gradient(90deg, #0FA0CE55 1px, transparent 1px)",
				'cyber-circuit': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyODgiIGhlaWdodD0iMjg4IiBmaWxsPSJub25lIj48ZyBzdHJva2U9IiMwRkEwQ0UiIG9wYWNpdHk9Ii4yIiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGQ9Ik0wIDQ0LjVoMTQuNW0wIDBWMG0wIDQ0LjVoNDdtMCAwdi0xN20wIDE3aDQ2bTAgMHYtMTdtMCAxN2g0Nm0wIDB2LTE3bTAgMTdoNDdtMCAwdi0xN20wIDE3aDQ3bTAgMHYtMTdtMCAxN2gyMC41bTAgMFYwIi8+PHBhdGggZD0iTTE0LjUgMjkuNWg0N201Ni41IDQ3VjYyIi8+PHBhdGggZD0iTTg5IDYyaC0yN20xMTMgMTYxLjVWMTYzbTAgMGg0MG00NyAwdjQ2LjVtMCA5NGgyMC41bS0yMC41LTc2di02MG0wIDBoNjZtLTY2IDUwLjVoMjcuNW0wIDB2MzRtMCAwaDE4LjVtMCAwSDI4OG0tMjcuNS0zNGgtMzhNMCA3NmgxMDlNNzYgMTE4aDc2TTAgMTQ4aDQ3bTAgMGgxNm0wIDBoMTZtLTc5IDQ3aDE0LjVtNCAwaDExNCIvPjxwYXRoIGQ9Ik0xNjkuNSAyMDEuNWwtMzcgMzdtMzcgMGgtMzdtMzctMzd2MzdtLTQ1LTE0LjVoLTM0bTAgMHYtMzltMCAwSDc2bS00NS41IDg3SDEyMk00NC41IDI1OGgxNi41bTAtNjEgMS41LTMzLjVtMCAwaC0xOG0wIDBoLTIybTE4IDBWMTQ4bTAzNyAwbTAgMCAxOCAwbTAgMCAxNSAwIi8+PHBhdGggZD0iTTc2IDIyNS41djMyLjVIODluOTEuNSAyNTh2LTk0bTk2LjUtNTJWNjdtMCAwTDIyMCA5OS41bS0zLjUtMTktMjAgMTltMzcuNS0xOS01NiA1Nm0tNDUtNTZ2MjFtOTguNS02MnY1MU0yODggMHYyOS41bTAgMGgtNDdtMCAwSDIxOG0yMy0yOS41VjBtMCAwSDIxOCIvPjxwYXRoIGQ9Ik0yMTggMjkuNUgwdjE3bTY3LjUtMTd2MTdtNDcuNS0xN3YxN20wIDBoNzZtLTc2IDB2MTVtNzYtMTV2MzEuNW0wIDAtNzYgNzZtNzYgMHYxOW0wIDAtMzggMzhtNTcgMTJ2MTEiLz48L2c+PC9zdmc+')",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
