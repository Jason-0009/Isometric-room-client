import { Graphics, Point } from 'pixi.js'

import WallDirection from './WallDirectionEnum'

import { WALL_COLORS, WALL_DIMENSIONS } from './Wall.constants'

import { TILE_DIMENSIONS } from '../tile/Tile.constants'

export default class Wall extends Graphics {
    constructor(position: Point, direction: WallDirection) {
        super()

        this.position.copyFrom(position)

        this.draw(direction)
    }

    /**
     * Draw the wall graphics.
     */
    private draw(direction: WallDirection) {
        switch (direction) {
            case WallDirection.BOTH:
                // Draw both left and right walls
                this.drawLeft()
                this.drawRight()
                break

            case WallDirection.LEFT:
                this.drawLeft()
                break

            case WallDirection.RIGHT:
                this.drawRight()
                break

            default:
                console.error('Invalid direction: ', direction)
        }
    }

    /**
     * Draw the left side of the wall.
     */
    private drawLeft() {
        this.drawLeftSurface()
        this.drawLeftBorder()
        this.drawTopLeftBorder()
    }

    /**
     * Draw the right side of the wall.
     */
    private drawRight() {
        this.drawRightSurface()
        this.drawRightBorder()
        this.drawTopRightBorder()
    }

    /**
     * Draw the left surface of the wall.
     */
    private drawLeftSurface() {
        // Customize the wall appearance and dimensions as needed.
        this.beginFill(WALL_COLORS.LEFT.SURFACE) // Gray color (you can change this)

        const points = [
            0, TILE_DIMENSIONS.HEIGHT / 2,
            0, -WALL_DIMENSIONS.HEIGHT,
            TILE_DIMENSIONS.WIDTH / 2, -WALL_DIMENSIONS.HEIGHT - TILE_DIMENSIONS.HEIGHT / 2,
            TILE_DIMENSIONS.WIDTH / 2, 0,
        ]

        this.drawPolygon(points) // Set the dimensions

        this.endFill()
    }

    private drawLeftBorder() {
        // Customize the wall appearance and dimensions as needed.
        this.beginFill(WALL_COLORS.LEFT.BORDER) // Gray color (you can change this)

        const points = [
            0, TILE_DIMENSIONS.HEIGHT / 2 + TILE_DIMENSIONS.THICKNESS,
            -WALL_DIMENSIONS.THICKNESS, TILE_DIMENSIONS.HEIGHT / 2 + TILE_DIMENSIONS.THICKNESS - WALL_DIMENSIONS.THICKNESS / 2,
            -WALL_DIMENSIONS.THICKNESS, -WALL_DIMENSIONS.HEIGHT - WALL_DIMENSIONS.THICKNESS / 2,
            0, -WALL_DIMENSIONS.HEIGHT
        ]

        this.drawPolygon(points) // Set the dimensions

        this.endFill()
    }

    private drawTopLeftBorder() {
        // Customize the wall appearance and dimensions as needed.
        this.beginFill(WALL_COLORS.LEFT.BORDER_TOP)

        const points = [
            -WALL_DIMENSIONS.THICKNESS, -WALL_DIMENSIONS.HEIGHT - WALL_DIMENSIONS.THICKNESS / 2,
            TILE_DIMENSIONS.WIDTH / 2, -WALL_DIMENSIONS.HEIGHT - TILE_DIMENSIONS.HEIGHT / 2 - WALL_DIMENSIONS.THICKNESS,
            TILE_DIMENSIONS.WIDTH / 2, -WALL_DIMENSIONS.HEIGHT - TILE_DIMENSIONS.HEIGHT / 2,
            0, -WALL_DIMENSIONS.HEIGHT
        ]

        this.drawPolygon(points) // Set the dimensions

        this.endFill()
    }

    /**
     * Draw the right surface of the wall.
     */
    private drawRightSurface() {
        // Customize the wall appearance and dimensions as needed.
        this.beginFill(WALL_COLORS.RIGHT.SURFACE) // Gray color (you can change this)

        const points = [
            TILE_DIMENSIONS.WIDTH / 2, 0,
            TILE_DIMENSIONS.WIDTH / 2, -WALL_DIMENSIONS.HEIGHT - TILE_DIMENSIONS.HEIGHT / 2,
            TILE_DIMENSIONS.WIDTH, -WALL_DIMENSIONS.HEIGHT,
            TILE_DIMENSIONS.WIDTH, TILE_DIMENSIONS.HEIGHT / 2
        ]

        this.drawPolygon(points) // Set the dimensions

        this.endFill()
    }

    /**
     * Draw the right border of the wall.
     */
    private drawRightBorder() {
        // Customize the wall appearance and dimensions as needed.
        this.beginFill(WALL_COLORS.RIGHT.BORDER) // Gray color (you can change this)

        const points = [
            TILE_DIMENSIONS.WIDTH, TILE_DIMENSIONS.HEIGHT / 2 + TILE_DIMENSIONS.THICKNESS,
            TILE_DIMENSIONS.WIDTH + WALL_DIMENSIONS.THICKNESS, TILE_DIMENSIONS.HEIGHT / 2 + TILE_DIMENSIONS.THICKNESS - WALL_DIMENSIONS.THICKNESS / 2,
            TILE_DIMENSIONS.WIDTH + WALL_DIMENSIONS.THICKNESS, -WALL_DIMENSIONS.HEIGHT - WALL_DIMENSIONS.THICKNESS / 2,
            TILE_DIMENSIONS.WIDTH, -WALL_DIMENSIONS.HEIGHT
        ]

        this.drawPolygon(points) // Set the dimensions

        this.endFill()
    }

    /**
     * Draw the top-right border of the wall.
     */
    private drawTopRightBorder() {
        // Customize the wall appearance and dimensions as needed.
        this.beginFill(WALL_COLORS.RIGHT.BORDER_TOP)

        const points = [
            TILE_DIMENSIONS.WIDTH / 2, -WALL_DIMENSIONS.HEIGHT - TILE_DIMENSIONS.HEIGHT / 2 - WALL_DIMENSIONS.THICKNESS,
            TILE_DIMENSIONS.WIDTH + WALL_DIMENSIONS.THICKNESS, -WALL_DIMENSIONS.HEIGHT - WALL_DIMENSIONS.THICKNESS / 2,
            TILE_DIMENSIONS.WIDTH, -WALL_DIMENSIONS.HEIGHT,
            TILE_DIMENSIONS.WIDTH / 2, -WALL_DIMENSIONS.HEIGHT - TILE_DIMENSIONS.HEIGHT / 2
        ]

        this.drawPolygon(points) // Set the dimensions

        this.endFill()
    }
}
